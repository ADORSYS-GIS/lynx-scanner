import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchConfigUrl } from '@store/thunks';

interface NotifMessage {
  id: string;
  message: string;
}

export interface NotificationState {
  messages: NotifMessage[];
}

const initialState = {
  messages: [],
} satisfies NotificationState as NotificationState;

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    clear(state) {
      state.messages = [];
    },
    remove(state, action: PayloadAction<string>) {
      state.messages = state.messages.filter((p) => p.id !== action.payload);
    },
    add(state, action: PayloadAction<string>) {
      state.messages.push({
        id: new Date().getTime().toString(),
        message: action.payload,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchConfigUrl.rejected, (state, action) => {
      state.messages.push({
        id: new Date().getTime().toString(),
        message: action.error?.message ?? JSON.stringify(action.error),
      });
    });
  },
});

export const {
  clear: clearNotifications,
  remove: removeNotification,
  add: addNotification,
} = notificationSlice.actions;

export const reducerNotification = notificationSlice.reducer;
