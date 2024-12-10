import { 
    FooterPage,
    CopyRight,
    Info,
    ContactUs,
    About,
    OtherSevices 
} from "./footer.style";
const Footer = () =>{
    return(
        <FooterPage>
            <Info>
                <ContactUs>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </ContactUs>
                <About>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </About>
                <OtherSevices>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </OtherSevices>
            </Info>
            <CopyRight>
                Copyright © 2024 Trip.com Travel Singapore Pte. Ltd. All rights reserved
                Site Operator: Trip.com Travel Singapore Pte. Ltd.
            </CopyRight>
        </FooterPage>
    )
}

export default Footer;