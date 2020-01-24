import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 80px;
  width: 100%;
  height: 100%;
  text-align: center;
`

export const CaptionTitle = styled.text`
  display: inline-block;
  font-size: 25px;
  font-family: ${({ theme }) => theme.fonts.header.family};
  margin-top: 100px;
`

export const CreateBox = styled.div`
  background-color: white;
  width: 1000px;
  height: 600px;
  display: inline-block;
`
