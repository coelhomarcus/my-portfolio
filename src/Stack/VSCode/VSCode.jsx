import React from 'react'
import Head from '../../Head/Head'
import Text from '../../Components/Text/Text'

const VSCode = () => {
   return (
      <div className='main'>
         <Head title="VSCode" />
         <button className="backButton" onClick={() => window.history.back()}>↫ Back</button>
         <Text h1="Visual Studio Code Setup" p="My vscode settings." />
         <Text h2="Extensions"
            pArray={[
               "• Themes: Vesper",
               "• Icon Theme: Symbols",
               "• ESLint",
               "• GitLens",
               "• Live Preview",
               "• Color Highlight",
               "• ES7+ React/Redux/React-Native snippets",
               "• Tailwind CSS IntelliSense"
            ]} />
      </div>
   )
}

export default VSCode