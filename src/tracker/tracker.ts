interface EventData {
  event: string;
  tags: string[];
  url: string;
  title: string;
  ts: number;
}

class Tracker {
  private buffer: EventData[] = [];
  private timeoutId: NodeJS.Timeout | null = null;
  private readonly apiUrl: string = "http://localhost:8888/track";

  constructor() {
    window.addEventListener("beforeunload", (event) =>
      this.handleBeforeUnload(event)
    );
  }

  public track(event: string, ...tags: string[]) {
    this.buffer.push(this.createEventData(event, tags));
    if (!this.timeoutId) this.initialTimeout();
  }

  private createEventData(event: string, tags: string[]) {
    const { href: url } = window.location;
    const { title } = document;
    const ts = Math.floor(Date.now() / 1000);
    return { event, tags, url, title, ts };
  }

  private handleBeforeUnload(event: Event) {
    event.preventDefault();
    this.sendBufferedEvents();
  }

  private async sendBufferedEvents() {
    if (this.buffer.length > 0) {
      try {
        const response = await fetch(this.apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.buffer),
        });
        if (response.ok) this.reset();
      } catch (error) {
        this.initialTimeout();
      }
    }
  }

  private initialTimeout() {
    this.timeoutId = setTimeout(() => this.sendBufferedEvents(), 1000);
  }

  private reset() {
    this.buffer.length = 0;
    this.timeoutId = null;
  }
}

const tracker = new Tracker();
