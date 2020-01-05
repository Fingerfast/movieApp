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
  padding: 20px 20px;
`;

const menuList = ['', 'Search']

export default function NavigationMenu() {
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
    a {
        color: ${props => props.match ? '#fff' : '#f78f19'};
        text-transform: uppercase;
        margin-right: 20px;
        position: relative;
        &:after {
            display: ${props => props.match ? 'block' : 'none'};
            position: absolute;
            content: "";
            bottom: -3px;
            left: 0;
            right: 0;
            width: 20px;
            margin: 0 auto;
            height: 2px;
            background-color: #808080;
        }
        &:hover {
                color: #fab15f;
        }
    }
    // background: ${props => props.match ? "white" : ""};
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

