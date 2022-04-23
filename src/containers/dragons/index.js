import { useState } from 'react';
import produce from 'immer';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { DragonsAPI } from '../../clients/DragonsAPI';

import {
  Header,
  Container,
  Card,
  FooterItems
} from '../../components';
import { ModalEditDragon } from './modals';
import { PageWrapper, Content, ContentTitle, CardList } from './style';

const getDragonsFn = async () => await DragonsAPI.find();
const updateDragonFn = async ({ dragonId, newDragon }) => await DragonsAPI.update(dragonId, newDragon);
const removeDragonFn = async (dragonsIds) => await DragonsAPI.removeMany(dragonsIds);


const Dragons = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: dragons } = useQuery(['dragons'], getDragonsFn, { initialData: [] });
  const [selected, setSelected] = useState([]);
  const [editing, setEditing] = useState(null);

  const { mutate: updateDragon, isLoading: isLoadingUpdate } = useMutation(updateDragonFn, {
    onMutate: async ({ dragonId, newDragon }) => {
      await queryClient.cancelQueries(['dragons']);

      const previous = queryClient.getQueryData(['dragons']);

      queryClient.setQueryData(['dragons'], produce((draft) => {
        const dragon = draft.find((dragon) => dragon.id === dragonId);

        dragon.name = newDragon.name;
        dragon.type = newDragon.type;
      }));

      return { previous }
    },
    onError: (err, data, context) => queryClient.setQueryData(['dragons'], context.previous),
    onSettled: () => queryClient.invalidateQueries(['dragons']),
  })

  const { mutate: removeDragon, isLoading: isLoadingRemove } = useMutation(removeDragonFn, {
    onMutate: async (dragonsIds) => {
      await queryClient.cancelQueries(['dragons']);

      const previous = queryClient.getQueryData(['dragons']);

      queryClient.setQueryData(['dragons'], (old) => old.filter(dragon => !dragonsIds.includes(dragon.id)));

      return { previous }
    },
    onError: (err, data, context) => queryClient.setQueryData(['dragons'], context.previous),
    onSettled: () => queryClient.invalidateQueries(['dragons']),
  })

  const handleCardEdit = (newCardId) => () => setEditing(newCardId);
  const handleCardSelect = (newCardId) => (e) => {
    const result = e.target.checked
      ? [...selected, newCardId]
      : selected.filter(cardId => cardId !== newCardId);

    setSelected(result);
  };

  const handleConfirmSelecting = async () => {
    const callback = {
      onSuccess: () => {
        setSelected([]);
      }
    }

    removeDragon(selected, callback);
  };

  const handleDismissSelecting = () => setSelected([]);
  const handleCloseModal = () => setEditing(null);
  const handleClickNewDragonButton = () => navigate("/dragon");
  const handleClickCard = (dragonId) => () => navigate(`/dragon/${dragonId}`);

  const isSelecting = Boolean(selected.length);

  return (
    <PageWrapper>
      <Header />

      <Content>
        <Container>
          <ContentTitle>
            <button onClick={handleClickNewDragonButton} className='btn-adicionar'>
              Cadastrar
            </button>
          </ContentTitle>

          <CardList>
            {
              dragons
                .sort((first, second) => new Intl.Collator().compare(first.name, second.name))
                .map((props) => (
                  <Card
                    key={props.id}
                    {...props}
                    isSelecting={isSelecting}
                    onSelect={handleCardSelect(props.id)}
                    onEdit={handleCardEdit(props.id)}
                    checked={selected.includes(props.id)}
                    onClick={handleClickCard(props.id)}
                  />
                ))
            }
          </CardList>
        </Container>
      </Content>

      <FooterItems
        isOpen={isSelecting}
        isLoading={isLoadingRemove}
        countItems={selected.length}
        onConfirm={handleConfirmSelecting}
        onDismiss={handleDismissSelecting}
      />

      <ModalEditDragon
        dragonId={editing}
        isLoading={isLoadingUpdate}
        onClose={handleCloseModal}
        onDragonUpdate={updateDragon}
      />

    </PageWrapper>
  )
}

export { Dragons }