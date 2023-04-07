import { TouchableOpacity } from 'react-native';
import { HStack, VStack, Text, Heading, Icon } from 'native-base';

import { UserPhoto } from './UserPhoto';

import { MaterialIcons } from '@expo/vector-icons';
import { useAuth } from '@hooks/useAuth';


export function HomeHeader() {
  const { user } = useAuth();

  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={{ uri: 'https://github.com/Danny-ctrl.png' }}
        alt="Imagem do usuario"
        size={16}
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>
        <Heading color="gray.100" fontSize="md" fontFamily="heading">
          {user.name}
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon
          as={MaterialIcons}
          name="logout"
          color="gray.200"
          size={7}
        />
      </TouchableOpacity>
    </HStack>
  )
}