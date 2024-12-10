export const parseJSONFile = async (
  file: File,
  callback: (parsedData: any) => void
) => {
  const reader = new FileReader();

  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result as string);
      callback(data);
    } catch (e) {
      console.error(`Error parsing the JSON file: ${e}`);
      alert("An error occurred while reading the file.");
    }
  };

  // Read the file as a text string (this should not be inside onload)
  reader.readAsText(file);
};
