
//https://github.com/FineUploader/react-fine-uploader/issues/49
export const asyncLoad = () => {
    console.log('here');
  return new Promise(resolve => {
    require.ensure([], () => {
      resolve({
        FineUploaderTraditional: require('react-fine-uploader').default,
        Gallery: require('react-fine-uploader/components/gallery').default
      })
    })
  })
};