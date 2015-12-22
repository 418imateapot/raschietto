def runGulp():

    def run():
        global w
        from .commands import buildStaticFiles
        w.Scrolledtext1.insert(INSERT,
                               "STARTING GULP BUILD\n==============\n")
        for line in buildStaticFiles():
            w.Scrolledtext1.insert(INSERT, line)
            w.Scrolledtext1.see(END)

    threading.Thread(target=run).start()
