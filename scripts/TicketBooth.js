const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

// contentTarget.addEventListener("#state-fair", clickEvent => {

// }


export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
        <button id="rideTicket">Ride Ticket</button>
        <button id="foodTicket">Food Ticket</button>
        <button id="gameTicket">Game Ticket</button>
        <button id="sideShowTicket">Sideshow Ticket</button>
        <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}



