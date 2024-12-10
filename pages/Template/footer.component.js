import React from 'react';
import { 
    FooterPage,
    CopyRight,
    Info,
    Column,
} from "./footer.style";

const Footer = () => {
    return (
        <FooterPage>
            <Info>
                    <Column>
                        <h3>Contact Us</h3>
                        <div>_________________________</div>
                        <a href="#">Customer Support</a>
                        <a href="#">Service Guarantee</a>
                        <a href="#">More Service Info</a>
                    </Column>
                    <Column>
                        <h3>About</h3>
                        <div>_________________________</div>
                        <a href="#">About Travelling.com</a>
                        <a href="#">News</a>
                        <a href="#">Careers</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">About Travelling.com Group</a>
                    </Column>
                    <Column>
                        <h3>Other Services</h3>
                        <div>_________________________</div>
                        <a href="#">Investor Relations</a>
                        <a href="#">Travelling.com Rewards</a>
                        <a href="#">Partners</a>
                        <a href="#">List My Hotel</a>
                        <a href="#">All Hotels</a>
                        <a href="#">Become a Supplier</a>
                        <a href="#">Security</a>
                    </Column>
            </Info>
            <CopyRight>
                Copyright © 2024 Travelling.com Travel Singapore Pte. Ltd. All rights reserved.
                Site Operator: Travelling.com Travel Singapore Pte. Ltd.
            </CopyRight>
        </FooterPage>
    );
};

export default Footer;
