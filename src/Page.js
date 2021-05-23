import { EuiPageTemplate } from '@elastic/eui';


export default function Page({ searcher, content }) {
    return (
        <EuiPageTemplate
            restrictWidth="75%"
            pageHeader={{
                iconType: 'logoElastic',
                pageTitle: 'IOMED Weather',
                rightSideItems: [searcher],
                alignItems: "center"
            }}>
            {content}
        </EuiPageTemplate>
    );
}
