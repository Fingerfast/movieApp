import React from 'react';
import styled from 'styled-components'
import {
    Link,
    useRouteMatch
} from "react-router-dom";

const MenuWrapper = styled.div`
  background: #544f4c;
  display: flex;
  flex: 1 0 auto;
  padding: 10px 20px;
`;

const menuList = ['', 'Search']

function NavigationMenu() {
    return (
        <MenuWrapper>
            {menuList.map((menuLabel, index) =>
                <CustomLink
                    activeOnlyWhenExact={true}
                    to={`/${menuLabel.toLocaleLowerCase()}`}
                    // onClick={setActiveMenu(index)}
                    key={`${menuLabel}-${index}`}
                    label={menuLabel ? menuLabel : 'Home'}
                    title={menuLabel}
                >
                    {menuLabel}
                </CustomLink>)}
        </MenuWrapper>
    )
}

const MenuLink = styled.div`
    background: ${props => props.match ? "white" : ""};
`

function CustomLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });
    return (
        <MenuLink match={match}>
            <Link to={to}>{label}</Link>
        </MenuLink>
    );
}


export default NavigationMenu;