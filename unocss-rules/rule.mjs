import { toEscapedSelector as e } from 'unocss'

const pattern = /^ktb-btn-([a-zA-Z]{1,})$/
function doRules([fullName, name]) {
  console.log({ name, fullName })
  // console.log(fullName)
  const result = `
  ${e(fullName)} { 
    background-color: ${name};
    color: white;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 0.5rem;
  }
  ${e(fullName)}:hover { 
    background-color: black;
  }
  `
  console.log(result)
  return result
}

export const KtbBtn = [pattern, doRules]