module.exports = function check(str, bracketsConfig) {
  let mem=[];
  let mem1=[];
  let mem2=[];

  bracketsConfig.forEach(elem => {
    mem1.push(elem[0]);
    mem2.push(elem[elem.length-1]);
  })

  for (i=0; i<str.length; i++) {
      if (mem1.includes(str[i])===false&&mem2.includes(str[i])===false) {continue}
      if (mem1.includes(str[i])&&mem2.includes(str[i])) {
          if (!mem.includes(str[i])) {
              mem.push(str[i])
          } else if (mem.pop()!==str[i]) {
              return false
          } else {continue}
      } else {
          if (mem1.includes(str[i])) {
              mem.push(str[i])
          } else if (mem1.indexOf(mem.pop())!==mem2.indexOf(str[i])) {
              return false
          } else {
            continue
          }
      }  
          
  }
if (mem.length==0) {return true} else {return false}
}
