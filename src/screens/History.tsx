import { useState } from 'react';
import { Heading, VStack, SectionList, Text } from 'native-base';
import { ScreenHeader } from '@components/ScreenHeader';
import { HistoryCard } from '@components/HistoryCard';

export function History() {

  const [exercises, setExercises] = useState([
    {
      title: "24.03.23",
      data: ["Puxada Frontal"]
    },
    {
      title: "25.03.23",
      data: ["Costas"]
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />
      <SectionList
        sections={exercises}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <HistoryCard />
        )}
        renderSectionHeader={({ section }) => (
          <Heading color="gray.200" textAlign="center" fontSize="md" mt={10} mb={3}>

            {section.title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: "center" }}
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há histórico de exercícios registrados ainda. {'\n'}
            Vamos treinar hoje?
          </Text>
        )}
      />

    </VStack>
  );
}