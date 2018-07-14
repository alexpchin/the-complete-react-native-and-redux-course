// This function is caled an 'action creator'
export const selectLibrary = (libraryId) => {
  // Actions should be a plain JS object
  return {
    type: 'select_library',
    payload: libraryId
  };
};
