import { EuiPageTemplate } from '@elastic/eui';


export default function Page({ auth, searcher, content }) {
    return (
        <EuiPageTemplate
            restrictWidth="75%"
            pageHeader={{
                iconType: 'logoElastic',
                pageTitle: 'Weather App',
                rightSideItems: [auth, searcher],
                alignItems: "center"
            }}>
            {content}
        </EuiPageTemplate>
    );
}
