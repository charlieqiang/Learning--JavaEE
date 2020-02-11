package com.hello.model;

public class SendEmailThread extends Thread{
	@Override
	public void run() {
		// TODO Auto-generated method stub
		int i=0;
		try {
			while (true) {
				Thread.sleep(1000);
				System.out.println((++i)+"ok");
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	
	}
}
