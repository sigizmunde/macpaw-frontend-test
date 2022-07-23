import { LogItem, LogList, TimeStamp } from './LogList.styled';
import Icons from 'images/icons/symbol-defs.svg';
import { Svg } from 'components/StyledBlocks/StyledBlocks';

const Log = ({ log, height = '100%' }) => {
  return (
    <LogList style={{ height: height }}>
      {log.length > 0 &&
        log.map(({ key, date, id, event }) => {
          let messageString;
          let iconHref = null;
          switch (event) {
            case 'fav':
              messageString = 'was added to Favourites';
              iconHref = Icons + '#icon-fav-color-20';
              break;
            case 'unfav':
              messageString = 'was removed from Favourites';
              break;
            case 'vote-up':
              messageString = 'was added to Likes';
              iconHref = Icons + '#icon-like-color-20';
              break;
            case 'vote-down':
              messageString = 'was added to Dislikes';
              iconHref = Icons + '#icon-dislike-color-20';
              break;
            case 'unvote':
              messageString = 'was removed from vote list';
              break;
            default:
              break;
          }
          return (
            <LogItem key={key}>
              <TimeStamp>
                {String(new Date(date).getHours()).padStart(2, '0')}:
                {String(new Date(date).getMinutes()).padStart(2, '0')}
              </TimeStamp>
              <div>
                Image ID: <span>{id}</span> {messageString}
              </div>
              <div>
                {iconHref && (
                  <Svg>
                    <use href={iconHref} />
                  </Svg>
                )}
              </div>
            </LogItem>
          );
        })}
    </LogList>
  );
};

export default Log;
