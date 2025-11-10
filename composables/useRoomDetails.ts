import { ref } from "vue";

export type Room = {
  id: string;
  title: string;
  price: number;
  image: string;
  features?: string[];
  amenities?: string[];
  size?: string;
  view?: string;
};

const selected = ref<Room | null>(null);

export function useRoomDetails() {
  function open(room: Room) {
    selected.value = room;
  }
  function close() {
    selected.value = null;
  }
  return { selected, open, close };
}
