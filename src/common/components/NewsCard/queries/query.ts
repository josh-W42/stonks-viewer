import { gql } from '@apollo/client';

export const GET_NEWS_QUOTE_SPECIFIC = gql`
  query GetNewsGQL($tickers: [String], $limit: Int) {
    GetNewsGQL(tickers: $tickers, limit: $limit) {
      items
      feed {
        title
        authors
        summary
        source
        url
        time_published
        banner_image
        source_domain
        overall_sentiment_label
        ticker_sentiment {
          ticker
          ticker_sentiment_score
          ticker_sentiment_label
        }
      }
    }
  }
`;

// For Reference
// const GET_NEWS_ALL = gql`
//   query GetNewsGQL(
//     $tickers: [String]
//     $topics: [String]
//     $timeFrom: String
//     $timeTo: String
//     $sort: String
//     $limit: Int
//   ) {
//     GetNewsGQL(
//       tickers: $tickers
//       topics: $topics
//       time_from: $timeFrom
//       time_to: $timeTo
//       sort: $sort
//       limit: $limit
//     ) {
//       items
//       sentiment_score_definition
//       relevance_score_definition
//       feed {
//         title
//         authors
//         summary
//         source
//         category_within_source
//         topics {
//           relevance_score
//           topic
//         }
//         url
//         time_published
//         banner_image
//         source_domain
//         overall_sentiment_score
//         overall_sentiment_label
//         ticker_sentiment {
//           ticker
//           relevance_score
//           sentiment_score
//           sentiment_label
//         }
//       }
//     }
//   }
// `;
