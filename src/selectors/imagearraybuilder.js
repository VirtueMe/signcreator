function image(value, img) {
  return { value, img };
}

const imageArrayBuilder = function() {
  return Array.from(arguments).map((img, index) => image(index, img));
};

export default imageArrayBuilder;
