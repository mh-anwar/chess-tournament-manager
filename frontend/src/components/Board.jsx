import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { GiRank1, GiRank2, GiRank3 } from 'react-icons/gi';
import Challenge from './Challenge.jsx';
import '../index.css';

export default function Board({
  width = '80%',
  showWR = true,
  showChallenge = true,
}) {
  showWR = true;
  const [leaderBoard, setLeaderBoard] = useState(null);

  useEffect(() => {
    const populateLeaderBoard = playersData => {
      let rankedPlayers = [];

      Object.values(playersData).forEach(player => {
        const wins = player['won'];
        const losses = player['lost'];
        const playerScore = wins - losses;
        let inserted = false;

        // Insert player into rankedPlayers array based on score comparison and name sorting
        for (let i = 0; i < rankedPlayers.length; i++) {
          const currentRankedPlayerScore =
            rankedPlayers[i]['won'] - rankedPlayers[i]['lost'];

          // Compare based on score, if equal compare by name alphabetically
          if (
            playerScore > currentRankedPlayerScore ||
            (playerScore === currentRankedPlayerScore &&
              player['name'].localeCompare(rankedPlayers[i]['name']) < 0)
          ) {
            rankedPlayers.splice(i, 0, player);
            inserted = true;
            break;
          }
        }

        // If player wasn't inserted in loop, add to the end
        if (!inserted) {
          rankedPlayers.push(player);
        }
      });

      // Icons for top 3 ranks
      const rankIcons = [GiRank3, GiRank2, GiRank1];

      // Mapping ranked players to table rows
      const leaderboardRows = rankedPlayers.map((player, index) => {
        const rank = index;
        const [firstName, lastName] = player['name'].split(' ');
        const displayName = firstName;

        // Determine if player is in top 3 and select appropriate rank icon
        const RankIcon = rank <= 3 ? rankIcons[rank] : null;

        return (
          <Tr key={rank}>
            <Td display="flex" flexDir="row" alignItems="center">
              {showChallenge ? (
                <Challenge
                  opponent={[firstName, lastName]}
                  rank={RankIcon ? <Icon as={RankIcon} /> : rank}
                />
              ) : RankIcon ? (
                <Icon as={RankIcon} />
              ) : (
                rank
              )}
            </Td>
            <Td>{showWR ? `${firstName} ${lastName}` : displayName}</Td>
            {showWR && (
              <>
                <Td>{player['won']}</Td>
                <Td>{player['lost']}</Td>
              </>
            )}
          </Tr>
        );
      });

      // Update the leaderboard state
      setLeaderBoard(leaderboardRows);
    };

    const fetchLeaderBoard = async () => {
      const data = await fetch(
        import.meta.env.VITE_HOST + '/api/leaderboard/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then(response => {
        return response.json();
      });
      populateLeaderBoard(data.data);
    };
    fetchLeaderBoard();
  }, [showWR, showChallenge]);

  const bg = useColorModeValue('light.header', 'dark.header');

  return (
    <TableContainer
      className="tableContainer"
      overflowY="auto"
      bg={bg}
      minHeight="60vh"
      maxHeight="65vh"
      width={width}
    >
      <Table
        overflowY="scroll"
        className="tableContainer"
        size={{ base: 'sm', sm: 'md', md: 'lg', lg: 'lg' }}
      >
        <Thead className="blur" minHeight="10vh">
          <Tr bg={bg} minHeight="10vh">
            <Th maxWidth="10%" minHeight="10vh">
              Rank
            </Th>
            <Th>Name</Th>
            {showWR === true && (
              <>
                <Th>Won</Th>
                <Th>Lost</Th>
              </>
            )}
          </Tr>
        </Thead>
        <Tbody>{leaderBoard}</Tbody>
      </Table>
    </TableContainer>
  );
}
