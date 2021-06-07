//놀이기구 키 제한
const heightCheck = height => {
  if (height < 150) {
    return 'NO';
  }
  return 'YES';
};
