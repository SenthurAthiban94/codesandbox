<!DOCTYPE html>
<html>
    <head>
        <!-- Meta Elements -->
        <meta charset="UTF-8"/>
        <title>HTML Basics</title>
        <!-- <meta http-equiv="Content-Security-Policy" content="default 'self';"> -->
        <meta name="viewport" content="width: device-width, initial-scale: 1.0">
        <meta name="keywords" content="HTML Basics, Learn HTML, Web development, HTML"/>
        <meta name="description" content="This webpage helps to understand html in much better way. And description should contain characters lenght between 60 to 120 chars">
        <meta name="author" content="Senthur Athiban">
        <!-- Open Graph Tags -->
        <meta name="og:title" content="HTML Basics">
        <meta name="og:description" content="This webpage helps to understand html in much better way. And description should contain characters lenght between 60 to 120 chars">
        <meta name="og:image" content="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Dci1MThOVdU0I3RxvibrNQ.jpeg">
        <meta name="og:url" content="https://49v1vt-3000.csb.app/HTML/">
        <!-- Canonical URL (Current URL) -->
        <link rel="canonical" href="https://49v1vt-3000.csb.app/HTML/">
    </head>
    <body>
        <!-- Block Elements -->
        <hr/><b>HTML Elements</b><hr/>
        A HTML Element consist of the following.
        <ul>
            <li><b>Opening tag</b></li>
            <li><b>Closing tag</b></li>
            <li><b>Content</b> - Optional</li>
        </ul>
        <div>
            <i>Examples: (with content)</i>
            <code>
                < div > Content < /div >
            </code><br/><br/>
            <i>Examples: (without content)</i>
            <code>
                < br />, < hr />
            </code><br/><br/>
            There are two types of HTML Elements
            <ul>
                <li><b>Block Elements</b></li>
                <li><b>Inline Elements</b></li>
            </ul>
        </div>
        <!-- Block Elements -->
        <hr/><b>Block Elements</b><hr/>
        <pre><div>I am a block element1,</div> <div>I am a block element2</div></pre>
        <div>
            <i>Examples:</i>
            <code>
                div, header, h1-h6, footer, br, hr, main, etc.
            </code>
            <br/><br/>
        </div>
        <!-- INLINE Elements -->
        <hr/><b>Inline Elements</b><hr/>
        <pre><span>I am a inline element1,</span> <span>I am a inline element2</span></pre>
        <div>
            <i>Examples:</i>
            <code>
                a, span, i, b, strong, etc.
            </code>
            <br/><br/>
        </div>
        <!-- Heading Tags H1...H6 -->
        <hr/><h2>Semantic HTML</h2><hr/>
        <p>HTML elements which describes its meaning both to the browser and developer is called semantic HTML. HTML generally contains both Semantic & Non-Semantic Elements.</p>
        <p>Elements like <b>div</b> & <b>span</b> doesn't define the meaning about its content and so they are non-semantic elements.</p>
        <p>Semantic elements on the other hand specify the meaning of their content.<br/>
            Example:
            <pre>
    < article > < aside > < details > < figure > < figcaption > < footer > < header >
    < main > < nav > < section > < summary > < time > < h1 >...< h6 >
            </pre>
        </p>
        <p>
        Some of the benefits from writing semantic markup are as follows:
        <ul>
            <li>Search engines will consider its contents as important keywords to influence the page’s search rankings</li>
            <li>Screen readers can use it as a signpost to help visually impaired users navigate a page</li>
            <li>Finding blocks of meaningful code is significantly easier than searching through endless divs with or without semantic or namespaced classes</li>
            <li>Suggests to the developer the type of data that will be populated</li>
            <li>Semantic naming mirrors proper custom element/component naming.</li>
        </ul>
        <b>Heading Tags</b><hr/>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6> 
        <hr/><b>Header & Footer Tags</b><hr/>
        Example:
            <pre>
    < header> 
            Header with nav links and search options
            < nav>
                < ul>
                    < li>Login< /li>
                    < li>SignUp< /li>
                < /ul>
            < /nav>
     < /header>
     < footer>
        Author, copy right info and social media links or internal website links.
     < /footer>
        </pre>
        <hr/><b>Main Tag</b><hr/>
        Example:
        <pre>
        < header>... < /header>
        < main>
            Main content of the webpage.
        < /main>
        < footer>... < /footer>
        </pre>
        <hr/><b>Section Tag</b><hr/>
        <p>Section tag contains one heading element and the content for it</p>
        Example:
        <section>
                <h2> Wings of Fire </h2>
                <p>
                    This book is written by APJ Abdul kalam.
                </p>
        </section>
        <pre>
        < section>
            < h2> Wings of Fire < /h2>
            < p>
                This book is written by APJ Abdul kalam.
            < /p>
        < /section>
        </pre>
        <hr/><b>Article Tag</b><hr/>
        <p>This tag specifies the details of an article and would make crawlers easy to crawl the content of the article.</p>
        Example:
        <pre>
        < article role="book">
            < h2>Book Title < /h2>
            < p>Book Description < /p>
        < /article>
        < article role="movie">
            < h2>Movie Title < /h2>
            < p>Movie Description < /p>
        < /article>
        </pre>
        <hr/><b>Aside Tag</b><hr/>
        <p>
            Aside tag represents the content are not directly related to the content of the website.
            Its the additional content or an Ad related to the actual content of the website which is not important to be crawled.
        </p>
        Example: Advertisements
        <pre>
        < aside>
            IAB Standards, any add Links or inessential content.
        < /aside>
        < main>
            Main actual content of the website to be crawled.
        < /main>
        </pre>
        <hr/><b>Details Tag</b><hr/>
        <p>
            A Details tag contains a label or a summary title that encaptulates its content or displays it based on the state open or close.
            open Attribute can be passed to the details tag to open the content by default.
        </p>
        Example:
        <details open>
            <summary>
                Click me to open/close
            </summary>
            Hidden content of the details tag
        </details>
        <pre>
        < details open>
            < summary>
                Click me to open/close
            < /summary>
            Hidden content of the details tag
        < /details>
        </pre>
        <hr/><b>Figure & Figcaption</b><hr/>
        <p>
            <b>< figure></b> element are used to have a self contained content with optional caption using <b>figcaption</b>
        </p>
        Example:
        <pre>
        < figure>
        < img src="https://miro.medium.com/v2/resize:fit:988/format:webp/1*JcSgXo0G77ajBLRNR7eIaQ.png"
            alt="Elephant at sunset"/>
        < figcaption>An elephant at sunset< /figcaption>
        < /figure>
        </pre>
        <img src="https://miro.medium.com/v2/resize:fit:988/format:webp/1*JcSgXo0G77ajBLRNR7eIaQ.png"
            alt="Elephant at sunset">
        <hr/><b>What is a DOM?</b><hr/>
        <p>
            DOM is the Document Object Model represents the structure of the document that connects the webpage to the scripts or programming language.
        </p>
        <div>Example: XML, HTML, & SVG documents are represented as Objects in Javascript though its not part of core Javascript.</div>
        <p>
            DOM is an Object tree each tree ends with a node which inturn contains an object within each node.
        </p>
        <p>
            DOM methods has programmatical access to the tree which can be used to change the structure, style and content of the document.
        </p>
        <hr/><b>How to identify a HTML5 Document?</b><hr/>
        <p>
            HTML5 Documents can be identified by the presence of <i>DOCTYPE html</i> at the top of the HTML Document.
        </p>
        <p>
            DOCTYPE is actually not an HTML element instead it represents the information to the browser about what type of document to be expected.
        </p>
        Example:
        <pre>
        < DOCTYPE html>
        </pre>
        <hr/><b>what are meta tags and why it is used?</b><hr/>
        <p>
            <b>meta</b> tags defines what type of content does your website holds. It gives the quick overview of your html page.
        </p>
        <p>There are various meta tags, but lets see about few that are mostly used.</p>
        <h4>charset</h4>
        <p>It defines the charset encoding type of the document.</p>
        <pre>< meta charset="UTF-8"/></pre>
        <h4>http-equiv</h4>
        <p>It can be used to define the headers like Content-type, Content-Security-Policy, refresh</p>
        <pre>< meta http-equiv="Content-Security-Policy" content="default 'self';"></pre>
        <pre>< meta http-equiv="Content-Type" content="application/json"></pre>
        <pre>< meta http-equiv="refresh" content="30"></pre>
        <h4>viewport</h4>
        <p>It can be used to give instructions to the browser regarding screen dimensions and scaling. A HTML page is said to be responsive only when this is been set.</p>
        <pre>< meta name="viewport" content="width: device-width, initial-scale: 1.0"></pre>
        <h4>keywords</h4>
        <p>It used to specify keywords for which your page has to be ranked by the crawlers.</p>
        <pre>< meta name="keywords" content="HTML Basics, Learn HTML, Web development, HTML"/></pre>
        <h4>description</h4>
        <p>It used to describe your website within 60 to 120 characters.</p>
        <pre>< meta name="description" content="This webpage helps to understand html in much better way. And description should contain characters lenght between 60 to 120 chars"></pre>
        <h4>author</h4>
        <p>It used to describe author for the website.</p>
        <pre>< meta name="author" content="Senthur Athiban"></pre>
        <p>
            Additionally OpenGraph meta tags also can be used to represent the website link graphically while sharing across social media platforms.
        </p>
        <p>Example:</p>
        <pre>
        < meta name="og:title" content="HTML Basics">
        < meta name="og:description" content="This webpage helps to understand html in much better way. And description should contain characters lenght between 60 to 120 chars">
        < meta name="og:image" content="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Dci1MThOVdU0I3RxvibrNQ.jpeg">
        < meta name="og:url" content="https://49v1vt-3000.csb.app/HTML/">
        </pre>
        <h3>Canonical URL</h3>
        <p>This can be used to display the link of the website in the search results of google. Canonical urls is often the current url of the webpage.</p>
        <pre>< link rel="canonical" href="https://49v1vt-3000.csb.app/HTML/"></pre>
        <h3>Schema</h3>
        <p>There are huge varieties of schema available that can be used based on the type of website built.</p>
        <p>Schema gives addtional information to the crawlers and rich search result contents could be seen on search engines.</p>
        <p>There are many domain specific schemas which can be implemented depending upon the website, but few common schema which can be implemented in any website are </p>
        <ul>
            <li>Breadcrumbs Schema</li>
            <li>Organisation Schema</li>
            <li>FAQ Schema</li>
            <li>Reviews Schema, etc.</li>
        </ul>
        <p>Schema can be implemented from <a href="https://schema.org/" target="_blank">Schema</a> and tested in <a href="https://developers.google.com/search/docs/appearance/structured-data" target="_blank">Structured Data Testing Tool</a></p>
        <p>Example:</p>
        <pre>
        < script type="application/ld+json">
            {
            "@context": "https://schema.org",
            "@type": "Organization",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Paris, France",
                "postalCode": "F-75002",
                "streetAddress": "38 avenue de l'Opera"
            },
            "email": "secretariat(at)google.org",
            "faxNumber": "( 33 1) 42 68 53 01",
            "member": [
                {
                "@type": "Organization"
                },
                {
                "@type": "Organization"
                }
            ],
            "alumni": [
                {
                "@type": "Person",
                "name": "Jack Dan"
                },
                {
                "@type": "Person",
                "name": "John Smith"
                }
            ],
            "name": "Google.org (GOOG)",
            "telephone": "( 33 1) 42 68 53 00"
            }
        < /script>
        </pre>
    </body>
</html>