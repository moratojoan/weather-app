import { EuiPageTemplate } from '@elastic/eui';


export default function Page({ content }) {
    return (
        <EuiPageTemplate
            restrictWidth="75%"
            pageHeader={{
                iconType: 'logoElastic',
                pageTitle: 'IOMED Weather'
            }}>
            {content}
        </EuiPageTemplate>
    );
}
