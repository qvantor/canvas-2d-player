export const aspect = [{ value: '4:3' }, { value: '16:9' }]

export const resolution = [
  {
    label: 'Small',
    '4:3': [1024, 768],
    '16:9': [1024, 576]
  },
  {
    label: 'HD',
    '4:3': [1280, 960],
    '16:9': [1280, 720]
  }, {
    label: 'FullHD',
    '4:3': [1440, 1080],
    '16:9': [1920, 1080]
  }]

export const orientation = [{ value: true, label: 'Landscape' }, { value: false, label: 'Portrait' }]
