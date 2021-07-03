AFRAME.registerComponent('place-side-view', {
    schema: {

    },

    init: function () {
        this.createPlace();

    },

    update: function () {
        // Do something when component's data is updated.
    },
    createPlaceThumbnail: function (position, id) {
        const entity1 = document.createElement("a-entity");
        entity1.setAttribute("visible", true);
        entity1.setAttribute("id", `place-${id}`);
        entity1.setAttribute("geometry", {
            primitive: "circle",
            radius: 2.5
        });
        entity1.setAttribute("material", {
            src: "./assets/helicopter.png",
            opacity: 0.9
        });
        entity1.setAttribute("position", position);
        entity1.setAttribute("cursor-listener", {});
        return entity1;
    },
    createPlace: function() {
        const sideViewContainer = document.querySelector("#side-view-container");
        let previousXposition = -150;
        let previousYposition = 30;
        for (var i = 1; i <= 4; i++) {
            const position = {
                x: (previousXposition + 50),
                y: (previousYposition + 2),
                z: -40
            };
            const entityEl = this.createPlaceThumbnail(position,i)
            sideViewContainer.appendChild(entityEl);
        }
    }
    ,
    remove: function () {

    },

    tick: function (time, timeDelta) {
        const placesContainer = document.querySelector("#placesContainer");
        const { state } = placesContainer.getAttribute("tour");
        if (state == "View" || state == "changeView") {
            this.el.setAttribute("visible", true);
        }
        else {
            this.el.setAttribute("visible", false);

        }
    }
});
