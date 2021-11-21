const links = {
  github: 'jp-show',
  youtube: 'channel/UC4GBzpvrNrGumNmXhqrPOug',
  facebook: 'jpofi2021',
  instagram: 'jp_show.exe',
  twitter: 'CLCODE_JPOfi'
}
function showMeSomething() {
  for (let li of socialLinks.children) {
    // lembra que quando você não coloca .algumas coisa depois da tag que quer utilizar o javascript vai enteder isso com uma variavel js e não uma tag, então use sempre "tagHTML.Contents (ou outra coisa)"
    //o que esse for vai fazer, tipo ele ta "criando" uma variavel referente a tag li, então ele vai armazenar a primeira li, agora esse "of socialLinks.children"  vai buscar mais filhos, quando terminar de rodar o primeiro li, ele vai buscar outro li seguinte e armazenar no li, até acabar
    const social = li.getAttribute('class') //porque a const ta funcionando? (ela ta alterando se não era pra alterar) isso se chama escopo, quando a for é lançado, essa variavel deixa de existi
    li.children[0].href = `https://www.${social}.com/${links[social]}/`
  }
}
showMeSomething()

function getGitHubInfoProfile() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url) //fetch vai pegar essa essa "url" e vao trazer o que ela da dando, por acaso essa url vai pegar o que ela responder e vai dar pra gente
    .then(reponse => reponse.json()) //"promessa", "se caso de certo, faça" o fetch bateu na url e pegou a resposta, pra gente usar essa responta a gente usa o "then"
    .then(data => {
      const firstName = data.name.split(' ', 1)
      const lastName = data.name.split(' ').slice(-1)
      userName.innerText = data.name
      userBio.innerText = data.bio
      userPicture.src = data.avatar_url
      userLinkGitHub.href = data.html_url
      userNickGitHub.innerText = data.login
      nameSite.innerText = `${firstName} ${lastName} - do While 2021`
    })
}
getGitHubInfoProfile()
//const fisrtName, secondName = nameGitHub.split('').at(-1)
//const [primeiroNome, segundoNome] = suaString.split(' ')
//suaString.split(' ').at(-1)
