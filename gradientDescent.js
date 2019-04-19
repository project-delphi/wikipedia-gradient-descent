// Derivative function
const df = (x) => (4*x-9)*x*x

const convergeGradientDescent = (
gradientFunction, // the gradient Function 
x0 = 0, // starting position
maxIters = 1000, // Maximum number of iterations
precision = 0.00001,  //  Desired precision of result
gamma = 0.01  // Step size multiplier
) => {
  let step = 2*precision
  let iter = 0
  let x = x0
  while (Math.abs(step) > precision){
    step = gamma * gradientFunction(x)
    x = x - step
    iter++
    console.log(iter)
    if(iter > maxIters) throw Error("Exceeded maximum iterations")
  }
  console.log(`Minimum at: ${x}`)
  console.log(`after ${iter} iteration(s)`)
  return(x)
}

// TEST
convergeGradientDescent(df,6)
//2.2499646074278457
//Minimum at: 2.2499646074278457
//after 70 iteration(s)
