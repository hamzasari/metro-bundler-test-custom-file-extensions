const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: {
      sourceExts
    }
  } = await getDefaultConfig();

  const platform = process.argv[2];
  
  console.log('platform', platform);

  let newSourceExts = null;
  switch (platform) {
    case 'android':
      newSourceExts = ['android.js', ...sourceExts]
      break;
    case 'desktop':
      newSourceExts = ['desktop.js', ...sourceExts]
      break;
    case 'firetv':
      newSourceExts = ['firetv.js', ...sourceExts]
      break;
    case 'ios':
      newSourceExts = ['ios.js', ...sourceExts]
      break;
    case 'lgos':
      newSourceExts = ['lgos.js', ...sourceExts]
      break;
    case 'ps4':
      newSourceExts = ['ps4.js', ...sourceExts]
      break;
    case 'rdk':
      newSourceExts = ['rdk.js', ...sourceExts]
      break;
    case 'stb':
      newSourceExts = ['stb.js', ...sourceExts]
      break;
    case 'tizen':
      newSourceExts = ['tizen.js', ...sourceExts]
      break;
    case 'tv':
      newSourceExts = ['tv.js', ...sourceExts]
      break;
    case 'web':
      newSourceExts = ['web.js', ...sourceExts]
      break;
    case 'webos':
      newSourceExts = ['webos.js', ...sourceExts]
      break;
    case 'windows':
      newSourceExts = ['windows.js', ...sourceExts]
      break;
    case 'xbox':
      newSourceExts = ['xbox.js', ...sourceExts]
      break;
  
    default:
      newSourceExts = sourceExts
      break;
  }

  return {
    resolver: {
      sourceExts: newSourceExts
    },
    server: {    
      port: 3000,  
    },
  }
})()
