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
  { id: '1',  title: 'Topic 1',  description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/1.jpg',  modelUrl: BASE + 'models/1.glb'  },
  { id: '2',  title: 'Topic 2',  description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/2.jpg',  modelUrl: BASE + 'models/2.glb'  },
  { id: '3',  title: 'Topic 3',  description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/3.jpg',  modelUrl: BASE + 'models/3.glb'  },
  { id: '4',  title: 'Topic 4',  description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/4.jpg',  modelUrl: BASE + 'models/4.glb'  },
  { id: '5',  title: 'Topic 5',  description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/5.jpg',  modelUrl: BASE + 'models/5.glb'  },
  { id: '6',  title: 'Topic 6',  description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/6.jpg',  modelUrl: BASE + 'models/6.glb'  },
  { id: '7',  title: 'Topic 7',  description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/7.jpg',  modelUrl: BASE + 'models/7.glb'  },
  { id: '8',  title: 'Topic 8',  description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/8.jpg',  modelUrl: BASE + 'models/8.glb'  },
  { id: '9',  title: 'Topic 9',  description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/9.jpg',  modelUrl: BASE + 'models/9.glb'  },
  { id: '10', title: 'Topic 10', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/10.jpg', modelUrl: BASE + 'models/10.glb' },
  { id: '11', title: 'Topic 11', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/11.jpg', modelUrl: BASE + 'models/11.glb' },
  { id: '12', title: 'Topic 12', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/12.jpg', modelUrl: BASE + 'models/12.glb' },
  { id: '13', title: 'Topic 13', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/13.jpg', modelUrl: BASE + 'models/13.glb' },
  { id: '14', title: 'Topic 14', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/14.jpg', modelUrl: BASE + 'models/14.glb' },
  { id: '15', title: 'Topic 15', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/15.jpg', modelUrl: BASE + 'models/15.glb' },
  { id: '16', title: 'Topic 16', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/16.jpg', modelUrl: BASE + 'models/16.glb' },
  { id: '17', title: 'Topic 17', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/17.jpg', modelUrl: BASE + 'models/17.glb' },
  { id: '18', title: 'Topic 18', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/18.jpg', modelUrl: BASE + 'models/18.glb' },
  { id: '19', title: 'Topic 19', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/19.jpg', modelUrl: BASE + 'models/19.glb' },
  { id: '20', title: 'Topic 20', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/20.jpg', modelUrl: BASE + 'models/20.glb' },
  { id: '21', title: 'Topic 21', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/21.jpg', modelUrl: BASE + 'models/21.glb' },
  { id: '22', title: 'Topic 22', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/22.jpg', modelUrl: BASE + 'models/22.glb' },
  { id: '23', title: 'Topic 23', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/23.jpg', modelUrl: BASE + 'models/23.glb' },
  { id: '24', title: 'Topic 24', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/24.jpg', modelUrl: BASE + 'models/24.glb' },
  { id: '25', title: 'Topic 25', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/25.jpg', modelUrl: BASE + 'models/25.glb' },
  { id: '26', title: 'Topic 26', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/26.jpg', modelUrl: BASE + 'models/26.glb' },
  { id: '27', title: 'Topic 27', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/27.jpg', modelUrl: BASE + 'models/27.glb' },
  { id: '28', title: 'Topic 28', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/28.jpg', modelUrl: BASE + 'models/28.glb' },
  { id: '29', title: 'Topic 29', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/29.jpg', modelUrl: BASE + 'models/29.glb' },
  { id: '30', title: 'Topic 30', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/30.jpg', modelUrl: BASE + 'models/30.glb' },
  { id: '31', title: 'Topic 31', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/31.jpg', modelUrl: BASE + 'models/31.glb' },
  { id: '32', title: 'Topic 32', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/32.jpg', modelUrl: BASE + 'models/32.glb' },
  { id: '33', title: 'Topic 33', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/33.jpg', modelUrl: BASE + 'models/33.glb' },
  { id: '34', title: 'Topic 34', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/34.jpg', modelUrl: BASE + 'models/34.glb' },
  { id: '35', title: 'Topic 35', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/35.jpg', modelUrl: BASE + 'models/35.glb' },
  { id: '36', title: 'Topic 36', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/36.jpg', modelUrl: BASE + 'models/36.glb' },
  { id: '37', title: 'Topic 37', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/37.jpg', modelUrl: BASE + 'models/37.glb' },
  { id: '38', title: 'Topic 38', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/38.jpg', modelUrl: BASE + 'models/38.glb' },
  { id: '39', title: 'Topic 39', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/39.jpg', modelUrl: BASE + 'models/39.glb' },
  { id: '40', title: 'Topic 40', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/40.jpg', modelUrl: BASE + 'models/40.glb' },
  { id: '41', title: 'Topic 41', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/41.jpg', modelUrl: BASE + 'models/41.glb' },
  { id: '42', title: 'Topic 42', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/42.jpg', modelUrl: BASE + 'models/42.glb' },
  { id: '43', title: 'Topic 43', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/43.jpg', modelUrl: BASE + 'models/43.glb' },
  { id: '44', title: 'Topic 44', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/44.jpg', modelUrl: BASE + 'models/44.glb' },
  { id: '45', title: 'Topic 45', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/45.jpg', modelUrl: BASE + 'models/45.glb' },
  { id: '46', title: 'Topic 46', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/46.jpg', modelUrl: BASE + 'models/46.glb' },
  { id: '47', title: 'Topic 47', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/47.jpg', modelUrl: BASE + 'models/47.glb' },
  { id: '48', title: 'Topic 48', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/48.jpg', modelUrl: BASE + 'models/48.glb' },
  { id: '49', title: 'Topic 49', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/49.jpg', modelUrl: BASE + 'models/49.glb' },
  { id: '50', title: 'Topic 50', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/50.jpg', modelUrl: BASE + 'models/50.glb' },
  { id: '51', title: 'Topic 51', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/51.jpg', modelUrl: BASE + 'models/51.glb' },
  { id: '52', title: 'Topic 52', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/52.jpg', modelUrl: BASE + 'models/52.glb' },
  { id: '53', title: 'Topic 53', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/53.jpg', modelUrl: BASE + 'models/53.glb' },
  { id: '54', title: 'Topic 54', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/54.jpg', modelUrl: BASE + 'models/54.glb' },
  { id: '55', title: 'Topic 55', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/55.jpg', modelUrl: BASE + 'models/55.glb' },
  { id: '56', title: 'Topic 56', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/56.jpg', modelUrl: BASE + 'models/56.glb' },
  { id: '57', title: 'Topic 57', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/57.jpg', modelUrl: BASE + 'models/57.glb' },
  { id: '58', title: 'Topic 58', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/58.jpg', modelUrl: BASE + 'models/58.glb' },
  { id: '59', title: 'Topic 59', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/59.jpg', modelUrl: BASE + 'models/59.glb' },
  { id: '60', title: 'Topic 60', description: '3D model and lesson content.', thumbnailUrl: BASE + 'thumbnails/60.jpg', modelUrl: BASE + 'models/60.glb' }
];