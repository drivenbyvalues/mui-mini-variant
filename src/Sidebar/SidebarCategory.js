import { Chip, ListItem, ListItemText } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { darken, rgba } from "polished";
import React from "react";
import styled from "styled-components";

const Category = styled(ListItem)`
  /* padding-top: ${(props) => props.theme?.spacing(3)}px;
  padding-bottom: ${(props) => props.theme?.spacing(3)}px;
  padding-left: ${(props) => props.theme?.spacing(6)}px;
  padding-right: ${(props) => props.theme?.spacing(5)}px; */
  /* font-weight: ${(props) => props.theme.typography.fontWeightRegular}; */

  svg {
    color: ${(props) => props.theme.sidebar.color};
    /* font-size: 20px;
    width: 20px;
    height: 20px;
    opacity: 0.5; */
  }

  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }

  &.${(props) => props.activeClassName} {
    background-color: ${(props) =>
      darken(0.05, props.theme.sidebar.background)};

    span {
      color: ${(props) => props.theme.sidebar.color};
    }
  }
`;

const CategoryText = styled(ListItemText)`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  span {
    color: ${(props) => props.theme.sidebar.color};
    /* font-size: ${(props) => props.theme.typography.body1.fontSize}px; */
    /* font-weight: ${(props) => props.theme.sidebar.category.fontWeight}; */
    /* padding: 0 ${(props) => props.theme.spacing(2.5)}px; */
  }
`;

const CategoryIconLess = styled(ExpandLess)`
  color: ${(props) => rgba(props.theme.sidebar.color, 0.5)};
`;

const CategoryIconMore = styled(ExpandMore)`
  color: ${(props) => rgba(props.theme.sidebar.color, 0.5)};
`;

const LinkBadge = styled(Chip)`
  font-size: 11px;
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  height: 20px;
  position: absolute;
  right: 12px;
  top: 8px;
  background: ${(props) => props.theme.sidebar.badge.background};

  span.MuiChip-label,
  span.MuiChip-label:hover {
    cursor: pointer;
    color: ${(props) => props.theme.sidebar.badge.color};
    padding-left: ${(props) => props.theme.spacing(2)}px;
    padding-right: ${(props) => props.theme.spacing(2)}px;
  }
`;

const CategoryBadge = styled(LinkBadge)`
  top: 12px;
`;

export default function SidebarCategory({
  name,
  icon,
  isOpen,
  isCollapsable,
  badge,
  ...rest
}) {
  return (
    <Category {...rest}>
      {icon}
      <CategoryText>{name}</CategoryText>
      {isCollapsable ? (
        isOpen ? (
          <CategoryIconMore />
        ) : (
          <CategoryIconLess />
        )
      ) : null}
      {badge ? <CategoryBadge label={badge} /> : ""}
    </Category>
  );
}
