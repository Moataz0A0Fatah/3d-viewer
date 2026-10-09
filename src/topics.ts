// Vite replaces this with the correct base path at build time:
//   - Dev:  '/'
//   - Prod: '/3d-viewer/'
const BASE = import.meta.env.BASE_URL;

export interface Topic {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  modelUrl: string;
}

export const topics: Topic[] = [
  { id: '01', title: 'Model 01', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/01.jpg', modelUrl: BASE + 'models/01.glb' },
  { id: '02', title: 'Model 02', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/02.jpg', modelUrl: BASE + 'models/02.glb' },
  { id: '03', title: 'Model 03', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/03.jpg', modelUrl: BASE + 'models/03.glb' },
  { id: '04', title: 'Model 04', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/04.jpg', modelUrl: BASE + 'models/04.glb' },
  { id: '05', title: 'Model 05', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/05.jpg', modelUrl: BASE + 'models/05.glb' },
  { id: '06', title: 'Model 06', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/06.jpg', modelUrl: BASE + 'models/06.glb' },
  { id: '07', title: 'Model 07', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/07.jpg', modelUrl: BASE + 'models/07.glb' },
  { id: '08', title: 'Model 08', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/08.jpg', modelUrl: BASE + 'models/08.glb' },
  { id: '09', title: 'Model 09', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/09.jpg', modelUrl: BASE + 'models/09.glb' },
  { id: '10', title: 'Model 10', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/10.jpg', modelUrl: BASE + 'models/10.glb' },
  { id: '11', title: 'Model 11', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/11.jpg', modelUrl: BASE + 'models/11.glb' },
  { id: '12', title: 'Model 12', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/12.jpg', modelUrl: BASE + 'models/12.glb' },
  { id: '13', title: 'Model 13', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/13.jpg', modelUrl: BASE + 'models/13.glb' },
  { id: '14', title: 'Model 14', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/14.jpg', modelUrl: BASE + 'models/14.glb' },
  { id: '15', title: 'Model 15', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/15.jpg', modelUrl: BASE + 'models/15.glb' },
  { id: '16', title: 'Model 16', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/16.jpg', modelUrl: BASE + 'models/16.glb' },
  { id: '17', title: 'Model 17', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/17.jpg', modelUrl: BASE + 'models/17.glb' },
  { id: '18', title: 'Model 18', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/18.jpg', modelUrl: BASE + 'models/18.glb' },
  { id: '19', title: 'Model 19', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/19.jpg', modelUrl: BASE + 'models/19.glb' },
  { id: '20', title: 'Model 20', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/20.jpg', modelUrl: BASE + 'models/20.glb' },
  { id: '21', title: 'Model 21', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/21.jpg', modelUrl: BASE + 'models/21.glb' },
  { id: '22', title: 'Model 22', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/22.jpg', modelUrl: BASE + 'models/22.glb' },
  { id: '23', title: 'Model 23', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/23.jpg', modelUrl: BASE + 'models/23.glb' },
  { id: '24', title: 'Model 24', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/24.jpg', modelUrl: BASE + 'models/24.glb' },
  { id: '25', title: 'Model 25', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/25.jpg', modelUrl: BASE + 'models/25.glb' },
  { id: '26', title: 'Model 26', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/26.jpg', modelUrl: BASE + 'models/26.glb' },
  { id: '27', title: 'Model 27', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/27.jpg', modelUrl: BASE + 'models/27.glb' },
  { id: '28', title: 'Model 28', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/28.jpg', modelUrl: BASE + 'models/28.glb' },
  { id: '29', title: 'Model 29', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/29.jpg', modelUrl: BASE + 'models/29.glb' },
  { id: '30', title: 'Model 30', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/30.jpg', modelUrl: BASE + 'models/30.glb' },
  { id: '31', title: 'Model 31', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/31.jpg', modelUrl: BASE + 'models/31.glb' },
  { id: '32', title: 'Model 32', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/32.jpg', modelUrl: BASE + 'models/32.glb' },
  { id: '33', title: 'Model 33', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/33.jpg', modelUrl: BASE + 'models/33.glb' },
  { id: '34', title: 'Model 34', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/34.jpg', modelUrl: BASE + 'models/34.glb' },
  { id: '35', title: 'Model 35', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/35.jpg', modelUrl: BASE + 'models/35.glb' },
  { id: '36', title: 'Model 36', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/36.jpg', modelUrl: BASE + 'models/36.glb' },
  { id: '37', title: 'Model 37', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/37.jpg', modelUrl: BASE + 'models/37.glb' },
  { id: '38', title: 'Model 38', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/38.jpg', modelUrl: BASE + 'models/38.glb' },
  { id: '39', title: 'Model 39', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/39.jpg', modelUrl: BASE + 'models/39.glb' },
  { id: '40', title: 'Model 40', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/40.jpg', modelUrl: BASE + 'models/40.glb' },
  { id: '41', title: 'Model 41', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/41.jpg', modelUrl: BASE + 'models/41.glb' },
  { id: '42', title: 'Model 42', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/42.jpg', modelUrl: BASE + 'models/42.glb' },
  { id: '43', title: 'Model 43', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/43.jpg', modelUrl: BASE + 'models/43.glb' },
  { id: '44', title: 'Model 44', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/44.jpg', modelUrl: BASE + 'models/44.glb' },
  { id: '45', title: 'Model 45', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/45.jpg', modelUrl: BASE + 'models/45.glb' },
  { id: '46', title: 'Model 46', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/46.jpg', modelUrl: BASE + 'models/46.glb' },
  { id: '47', title: 'Model 47', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/47.jpg', modelUrl: BASE + 'models/47.glb' },
  { id: '48', title: 'Model 48', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/48.jpg', modelUrl: BASE + 'models/48.glb' },
  { id: '49', title: 'Model 49', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/49.jpg', modelUrl: BASE + 'models/49.glb' },
  { id: '50', title: 'Model 50', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/50.jpg', modelUrl: BASE + 'models/50.glb' },
  { id: '51', title: 'Model 51', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/51.jpg', modelUrl: BASE + 'models/51.glb' },
  { id: '52', title: 'Model 52', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/52.jpg', modelUrl: BASE + 'models/52.glb' },
  { id: '53', title: 'Model 53', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/53.jpg', modelUrl: BASE + 'models/53.glb' },
  { id: '54', title: 'Model 54', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/54.jpg', modelUrl: BASE + 'models/54.glb' },
  { id: '55', title: 'Model 55', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/55.jpg', modelUrl: BASE + 'models/55.glb' },
  { id: '56', title: 'Model 56', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/56.jpg', modelUrl: BASE + 'models/56.glb' },
  { id: '57', title: 'Model 57', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/57.jpg', modelUrl: BASE + 'models/57.glb' },
  { id: '58', title: 'Model 58', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/58.jpg', modelUrl: BASE + 'models/58.glb' },
  { id: '59', title: 'Model 59', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/59.jpg', modelUrl: BASE + 'models/59.glb' },
  { id: '60', title: 'Model 60', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/60.jpg', modelUrl: BASE + 'models/60.glb' }
];