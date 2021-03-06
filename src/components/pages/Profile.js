/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import takuya from './../../img/takuya_croped.jpg'
import { MdContactMail } from 'react-icons/md'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { Section, H2, P } from './../atoms'
import { TodoList } from './../organisms'
import { colors, mqs } from './../emotion-variables'

const Profile = () => {
  return (
    <div>
      <Section css={[grid, profileWrapper]}>
        <div css={[grid, infoWrapper]}>
          <ImgWrapper>
            <img src={takuya} alt="Takuya" />
          </ImgWrapper>
          <H2>TAKUYA HIRATA</H2>
          <p>Software Engineer</p>
          <div>
            <a href="mailto:takuyahirata4@gmail.com">
              <MdContactMail css={icons} />
            </a>
            <a
              href="https://github.com/Takuya-H23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub css={[icons, iconCenter]} />
            </a>
            <a
              href="https://www.linkedin.com/in/takuya-hirata-1a6562169/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn css={icons} />
            </a>
          </div>
        </div>
        <div>
          <P margin>
            Hard-working front-end developer with a passion for building web
            applications that are maintainable and scalable. I am experienced in
            developing and debugging React applications in a fast-paced
            environment. I love to work as a team and learn new things to
            improve my skills.
          </P>
          <P margin>I like: React, React Native, GraphQL, Node.js.</P>
          <P>I'm good at: JavaScript, COD, Baseball</P>
        </div>
      </Section>

      <Section>
        <H2 css={border} margin>
          As A Software Engineer
        </H2>
        <TodoList />
      </Section>
    </div>
  )
}

const grid = css`
  display: grid;
  row-gap: 1rem;
`
const profileWrapper = css`
  ${mqs.md} {
    grid-template-columns: 1fr 1.5fr;
    gap: 1rem 2rem;
  }
`

const infoWrapper = css`
  grid-template-columns: 1fr;
  justify-items: center;
  row-gap: 1rem;
`

const ImgWrapper = styled.div`
  border: 1.4px solid ${colors.secondary};
  border-radius: 50%;
  padding: 0.8rem;
  width: 40%;
  ${mqs.sm} {
    width: 30%;
  }
  ${mqs.md} {
    width: 45%;
  }

  img {
    width: 100%;
    border-radius: 50%;
    vertical-align: middle;
  }
`

const icons = css`
  font-size: 2rem;
`

const iconCenter = css`
  margin: 0 1rem;
`

const border = css`
  border-bottom: 1px solid ${colors.border};
  padding-bottom: 1rem;
  text-align: center;
`

export default Profile
