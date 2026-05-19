import { supabase, isMockMode } from './supabase';

export interface Photo {
  id: string;
  submitter_name: string;
  submitter_email: string;
  caption: string;
  category: string;
  image_url: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
}

const DEFAULT_PHOTOS: Photo[] = [
  {
    id: 'seed-1',
    submitter_name: 'KSSCB Field Team',
    submitter_email: 'team@ksscb.org',
    caption: 'Sarbo Sweaken pathway cleanup in progress by our dedicated field team.',
    category: 'Sanitation',
    image_url: '/images/cleanup_path.jpg',
    status: 'approved',
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'seed-2',
    submitter_name: 'KSSCB Field Team',
    submitter_email: 'team@ksscb.org',
    caption: 'Trimming and landscaping high-traffic roadsides to keep the environment safe and beautiful.',
    category: 'Sanitation',
    image_url: '/images/mowing_grass.jpg',
    status: 'approved',
    created_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'seed-3',
    submitter_name: 'KSSCB Field Team',
    submitter_email: 'team@ksscb.org',
    caption: 'Cleaned shoulders along the main Sarbo Sweaken highway.',
    category: 'Infrastructure',
    image_url: '/images/sweaken_highway.png',
    status: 'approved',
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'seed-4',
    submitter_name: 'KSSCB Field Team',
    submitter_email: 'team@ksscb.org',
    caption: 'Field workers clearing dense weeds and preparing land for civic greening initiatives.',
    category: 'Greening',
    image_url: '/images/weeding_team.jpg',
    status: 'approved',
    created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'seed-5',
    submitter_name: 'KSSCB Field Team',
    submitter_email: 'team@ksscb.org',
    caption: 'Team efforts to clear fallen palm trunks and debris from public thoroughfares.',
    category: 'Sanitation',
    image_url: '/images/palm_cleanup.jpg',
    status: 'approved',
    created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

// Helper to initialize and retrieve Mock DB in localStorage safely (browser-only)
function getMockPhotos(): Photo[] {
  if (typeof window === 'undefined') {
    return DEFAULT_PHOTOS;
  }
  const stored = localStorage.getItem('ksscb_photos');
  if (!stored) {
    localStorage.setItem('ksscb_photos', JSON.stringify(DEFAULT_PHOTOS));
    return DEFAULT_PHOTOS;
  }
  try {
    const parsed = JSON.parse(stored);
    // Invalidate old cache if they contain placeholder images
    const hasOldPhotos = parsed.some((p: any) => 
      p.image_url.includes('greening_project_liberia') || 
      p.image_url.includes('community_cleanup') ||
      p.image_url.includes('street_signage')
    );
    if (hasOldPhotos) {
      localStorage.setItem('ksscb_photos', JSON.stringify(DEFAULT_PHOTOS));
      return DEFAULT_PHOTOS;
    }
    return parsed;
  } catch (e) {
    console.error('Failed to parse mock photos from localStorage', e);
    return DEFAULT_PHOTOS;
  }
}

function saveMockPhotos(photos: Photo[]) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('ksscb_photos', JSON.stringify(photos));
  }
}

/**
 * Uploads a file to Supabase Storage or returns base64 string in mock mode
 */
export async function uploadPhotoFile(file: File): Promise<string> {
  if (isMockMode) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  // Live Supabase Storage upload
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
  const filePath = `uploads/${fileName}`;

  const { error } = await supabase.storage
    .from('photos')
    .upload(filePath, file);

  if (error) {
    throw error;
  }

  const { data: publicUrlData } = supabase.storage
    .from('photos')
    .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
}

/**
 * Public: Get all approved photos for the gallery page
 */
export async function getApprovedPhotos(): Promise<Photo[]> {
  if (isMockMode) {
    return getMockPhotos().filter((p) => p.status === 'approved');
  }

  const { data, error } = await supabase
    .from('photos')
    .select('*')
    .eq('status', 'approved')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Failed to fetch from Supabase, returning empty array', error);
    return [];
  }
  return data || [];
}

/**
 * Public: Submit a photo for approval
 */
export async function submitPhoto(
  photoData: Omit<Photo, 'id' | 'status' | 'created_at'>
): Promise<Photo> {
  const newPhoto: Photo = {
    id: `photo-${Math.random().toString(36).substring(2, 9)}`,
    ...photoData,
    status: 'pending',
    created_at: new Date().toISOString(),
  };

  if (isMockMode) {
    const photos = getMockPhotos();
    photos.unshift(newPhoto);
    saveMockPhotos(photos);
    return newPhoto;
  }

  const { data, error } = await supabase
    .from('photos')
    .insert([newPhoto])
    .select()
    .single();

  if (error) {
    throw error;
  }
  return data;
}

/**
 * Admin: Get all photos (both pending, approved, and rejected)
 */
export async function getAllPhotosAdmin(): Promise<Photo[]> {
  if (isMockMode) {
    return getMockPhotos();
  }

  const { data, error } = await supabase
    .from('photos')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Failed to fetch all photos for admin', error);
    return [];
  }
  return data || [];
}

/**
 * Admin: Approve or reject a photo submission
 */
export async function updatePhotoStatus(
  id: string,
  status: 'pending' | 'approved' | 'rejected'
): Promise<Photo> {
  if (isMockMode) {
    const photos = getMockPhotos();
    const index = photos.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new Error(`Photo with ID ${id} not found`);
    }
    photos[index].status = status;
    saveMockPhotos(photos);
    return photos[index];
  }

  const { data, error } = await supabase
    .from('photos')
    .update({ status })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    throw error;
  }
  return data;
}
