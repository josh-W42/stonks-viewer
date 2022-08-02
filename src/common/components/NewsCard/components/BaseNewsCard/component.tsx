import { Chip, Grid, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { ErrorCard } from '../../../ErrorCard';
import { PaginatedList } from '../../../PaginatedList';
import { PlaceholderCard } from '../../../PlaceholderCard';
import { formatNewsDate } from '../../helpers';
import { INewsContainer } from '../../types';

interface Props {
  data?: INewsContainer;
  error?: boolean;
  loading?: boolean;
  config?: IBaseNewsCardConfig;
}

interface IBaseNewsCardConfig {
  mobile?: true | undefined;
}

export const BaseNewsCard: React.FunctionComponent<Props> = ({
  data,
  loading,
  error,
}) => {
  if (loading) {
    return <PlaceholderCard />;
  }

  if (error) {
    return <ErrorCard message="Couldn't Fetch News Data" />;
  }

  if (!data) {
    return <ErrorCard message="No Data Found!" />;
  }

  const articles = data.feed?.map((article) => {
    const tickers = article.ticker_sentiment?.map((tickerRef) => {
      return (
        <Link
          to={`/quotes/${tickerRef.ticker}`}
          key={`${tickerRef?.ticker_sentiment_score}-${Math.floor(
            Math.random() * 10000
          )}`}
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          <Chip label={tickerRef.ticker} sx={{ margin: 0.5 }} clickable />
        </Link>
      );
    });

    return (
      <ListItem
        key={`${article.time_published}-${Math.random() * 10000}`}
        sx={{
          padding: 1,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <Typography
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            fontWeight: 'bolder',
            alignSelf: 'start',
          }}
          variant="h6"
          component={'a'}
          href={article.url}
          target={'_blank'}
          rel={'noopener noreferrer'}
        >
          {article.title}
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant={'subtitle2'}>{article.source}</Typography>
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            <Typography variant="caption">
              {formatNewsDate(article.time_published ?? '')}
            </Typography>
          </Grid>
          {article.banner_image ? (
            <Grid item xs={12} sm={4} sx={{ padding: 1 }}>
              <img
                style={{ borderRadius: 10 }}
                alt={'Article Image, Content Unknown'}
                src={article.banner_image}
                width={'100%'}
              />
            </Grid>
          ) : null}
          <Grid item xs={12} sm={8} sx={{ padding: 0.5 }}>
            <Typography
              variant="body1"
              component={'summary'}
              sx={{ wordBreak: 'break-word', marginBottom: 1 }}
            >
              {article.summary}
            </Typography>
            {article.ticker_sentiment && article.ticker_sentiment.length > 0 ? (
              <React.Fragment>
                <Typography fontWeight={'bold'}>Related:</Typography> {tickers}
              </React.Fragment>
            ) : null}
          </Grid>
          {article.topics && article.topics.length > 0 ? (
            <Grid item xs={12}>
              <Typography>
                Topics: {article.topics?.map((topic) => topic.topic).toString()}
              </Typography>
            </Grid>
          ) : null}
        </Grid>
      </ListItem>
    );
  });

  return (
    <List dense>
      <PaginatedList count={2} data={articles} />
    </List>
  );
};
