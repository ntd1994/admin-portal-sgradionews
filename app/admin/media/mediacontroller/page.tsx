// Giả lập API call trong controller
export const uploadMedia = async (file: File) => {
  // Giả lập upload file
  console.log("Uploading file:", file.name);
  return new Promise((resolve) => setTimeout(resolve, 2000)); // Giả lập delay
};

export const deleteMedia = async (id: number) => {
  console.log("Deleting media with ID:", id);
  return new Promise((resolve) => setTimeout(resolve, 1000)); // Giả lập delay
};

export const updateMedia = async (id: number, newName: string) => {
  console.log(`Updating media ID ${id} to new name: ${newName}`);
  return new Promise((resolve) => setTimeout(resolve, 1500)); // Giả lập delay
};
