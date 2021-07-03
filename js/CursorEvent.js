AFRAME.registerComponent('cursor-listener', {
    schema: {
        selectItemId: { default: '', type: "string" },

    },

    init: function () {
        this.handleMouseLeaveEvents();
        this.handleMouseEnterEvents();
        this.handleClickEvent();
    },
    handlePlaceListState: function () {
        const id = this.el.getAttribute("id");

        const placesId = ["taj-mahal", "budapest", "eiffel-tower", "new-york-city"];
        if (placesId.includes(id)) {
            const placeContainer = document.querySelector("#placesContainer");
            placeContainer.setAttribute("cursor-listener", { selectItemId: id, });
            this.el.setAttribute("material", {
                color: "#D76B30",
                opacity: 1

            });
        }
    },
    handleMouseEnterEvents: function () {
        this.el.addEventListener("mouseenter", () => {
            this.handlePlaceListState();
        });
    },
    handleMouseLeaveEvents: function () {
        this.el.addEventListener("mouseleave", () => {
            const { selectItemId } = this.data;
            if (selectItemId) {
                const el = document.querySelector(`#${selectItemId}`);
                const id = el.getAttribute("id");
                if (id === selectItemId) {
                    el.setAttribute("material", {
                        color: "#0077cc",
                        opacity: 1
                    });

                }
            }
        })
    },
    handleClickEvent: function () {
        this.el.addEventListener("click", event => {
            const placeContainer = document.querySelector("#placesContainer");
            const { state } = placeContainer.getAttribute("tour");
            if (state === "places-list") {
                const id = this.el.getAttribute("id");
                const placesId = ["taj-mahal", "budapest", "eiffel-tower", "new-york-city"];
                if (placesId.includes(id)) {
                    placeContainer.setAttribute("tour", { state: "view", selectedCard: id });
                }
            }
            if(state === "view"){
                this.handleViewStates();
            }
            if(state === "change-view"){
                this.handleViewStates();
            }
        });

    },
    handleViewStates: function () {
        const el = this.el;
        const id = el.getAttribute("id");
        const PlaceContainer = document.querySelector("#placesContainer");
        const selectItemId = PlaceContainer.getAttribute("cursor-listener");
        const sideViewPlaceId = ["place-1", "place-2", "place-3", "place-4"];
        if (sideViewPlaceId.includes(id)) {
            PlaceContainer.setAttribute("tour", { state: "change-view" });
        };
        const skyEl = document.querySelector("#main-container");
        skyEl.setAttribute("material", {
            src: `./assets/thumbnails/360_images/${selectItemId}/${id}.jpg`,
            color: "#fff"
        });
    },
    update: function () {
    },

    remove: function () {
    },

    tick: function (time, timeDelta) {

    }

});
