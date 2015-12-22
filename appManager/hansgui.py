from Tkinter import Tk, Frame, BOTH


class AppManager(Frame):

    def __init__(self, parent):
        Frame.__init__(self, parent, background="white")
        self.parent = parent
        self.initUI()

    def initUI(self):
        self.parent.title("Raschietto Manager")
        self.pack(fill=BOTH, expand=1)


def main():

    root = Tk()
    root.geometry("250x150+300+300")
    app = AppManager(root)
    root.mainloop()


if __name__ == "__main__":
    main()
