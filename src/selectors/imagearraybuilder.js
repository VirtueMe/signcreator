function image(value, img) {
  return { value, img };
}

const imageArrayBuilder = function() {
  return Array.from(arguments).map((img, index) => image(index+1, img));
};

export default imageArrayBuilder;
