function pillars(num_pill, dist, width) {
  if (num_pill <=1){
    return 0
  }else{
  let numPill = num_pill - 2
  let cent = dist * 100
  let spaces = num_pill - 1
  return (numPill * width) +  (cent * spaces)
  }
}
