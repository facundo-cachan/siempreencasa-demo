function uuid(min = 0, max = Date.now()) {
  return Math.floor(Math.random() * (max - min)) + min
}
export default uuid
