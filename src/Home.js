import { EuiPageTemplate } from '@elastic/eui';


export default function Home({ button = <></>, content}) {
    return (
        <EuiPageTemplate
            restrictWidth="75%"
            pageHeader={{
                iconType: 'logoElastic',
                pageTitle: 'Page title',
                rightSideItems: [button],
            }}>
            {content}
        </EuiPageTemplate>
    );
}
