import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations'

function ProfileSidebar({ githubUser }) {
  
  return (
    <Box>
      <img style={{ borderRadius: '8px'}} src={ `https://github.com/${githubUser}.png` }/>
    </Box>
  )
}

export default function Home() {
  const pessoasFavoritas = ['juunegreiros',
  'omariosouto', 'peas', 'rafaballerini', 'marcobrunodev', 'felipefialho']
  const githubUser = 'lucas-chave'
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={ {gridArea: 'profileArea'} }>
          <ProfileSidebar githubUser={ githubUser } />
        </div>
        <div className="welcomeArea" style={ {gridArea: 'welcomeArea'} }>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box> 
        </div>
        <div className="profileRealtionsArea" style={ {gridArea: 'profileRealtionsArea'} }>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((pessoa) => (
                <li>
                  <a href={`/user/${pessoa}`} key={pessoa}>
                    <img src={`https://github.com/${pessoa}.png`} alt="imagem de usuario do gitHub"/>
                    <span>{pessoa}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBoxWrapper>

        </div>
      </MainGrid>
    </>
  )
}
