const a = 1;


function list(template, ...values){
  return template.reduce((accumulator, part, i) => {
    return `
      ${accumulator}
      <ul><li>oi</li></ul>
      ${part}
    `
  })
}

const ret = list`<div>${a}</div>`;

console.log(ret)
