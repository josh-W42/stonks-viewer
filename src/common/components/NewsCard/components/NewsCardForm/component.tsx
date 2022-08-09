import {
  Checkbox,
  Chip,
  FormControl,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@mui/material';
import React from 'react';
import { StockAutoComplete } from '../../../StockAutoComplete';
import { NewsCardTopic } from '../../types';
import { NewsCardTopicCheckItem } from './container';

interface Props {
  symbols: string[];
  topicItems: NewsCardTopicCheckItem[];
  handleDeleteSymbol: (id: string) => void;
  handleAddSymbol: (id: string) => void;
  handleToggleCheck: (id: NewsCardTopic) => void;
}

export const NewsCardFormComponent: React.FunctionComponent<Props> = ({
  symbols,
  topicItems,
  handleDeleteSymbol,
  handleAddSymbol,
  handleToggleCheck,
}) => {
  const symbolChips = symbols.map((symbol, index) => {
    return (
      <Chip
        key={`${symbol}-${index}`}
        label={symbol}
        sx={{ margin: 0.5 }}
        onDelete={() => handleDeleteSymbol(symbol)}
      />
    );
  });

  const topicListItems = topicItems.map((item) => {
    return (
      <ListItem key={item.topicID}>
        <Tooltip title={item.description ?? ''}>
          <ListItemButton
            role={'checkbox'}
            onClick={() => handleToggleCheck(item.topicID)}
          >
            <ListItemIcon>
              <Checkbox edge={'start'} checked={item.checked} disableRipple />
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </Tooltip>
      </ListItem>
    );
  });

  return (
    <FormControl>
      {symbolChips}
      <StockAutoComplete changeCb={(symbol) => handleAddSymbol(symbol)} />
      <List>{topicListItems}</List>
    </FormControl>
  );
};
