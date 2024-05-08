// eslint-disable-next-line no-unused-vars
import React from 'react'
import Code from '../assets/Code.png'
import Download from '../assets/Download.png'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const Api = () => {
  const codeSnippet = '<script src="path/to/request.js"></script>Create HTML Elements:Create the necessary HTML elements for the DigiChain integration:Form element with three inputs:Input for DigiChain Supply IDSubmit button<p> element to display errorsDiv to display fetched contents:<h1> for title<h2> for subtitle<p> for detailed contentAssign appropriate IDs to these elements as described:<form id="DigiChain_supply_form">'
  return (
    <div className='text-white'>
      <div>
        <div>
          <div className='w-[309px] flex justify-between items-center'>
            <img src={Code} alt='Code vector'/>
            <h1 className='text-[40px] font-[500]'>Prerequisite:</h1>
          </div>
          <p>
            Before integrating the DigiChain supply chain 
            system into your website, 
            make sure to complete the following steps:
          </p>
        </div>
        <div>
          <div className='w-[721px] flex justify-between items-center'>
            <img src={Download} alt='Download vector' />
            <h1 className='text-[40px] font-[500]'>Download and Include request.js</h1>
          </div>
          <div>
            <p>
              Download the request.js file from the DigiChain API documentation. <br />
              Unzip the file and add it as an external script in your HTML file:
            </p>
            <SyntaxHighlighter language="javascript" style={dracula}>
              {codeSnippet}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Api