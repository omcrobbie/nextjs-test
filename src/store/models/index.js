import { types } from 'mobx-state-tree';

const Store = types
    .model('Store', {
        shows: types.array(types.frozen)
    })
    
    .actions(self => ({
        addShows(showData) {
            self.shows = showData;
        },
        getShow(id) {
            return self.shows.find(show => show.id === id);
        }

    }))
export default Store;