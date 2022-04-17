class ATM {
private:
     vector<long long> cnt{0,0,0,0,0};
public:
   
    ATM() {
        
    }
    
    void deposit(vector<int> Count) {
        for(int i=0;i<5;i++)
            cnt[i]+=Count[i];
    }
    
    vector<int> withdraw(int amount) {
         vector<int> take{0,0,0,0,0};
         vector<int> val{20,50,100,200,500};
         for(int i=4;i>=0;i--){
            take[i]=(amount/val[i] > cnt[i]) ? cnt[i] : amount/val[i];
             // min of present and to take
             amount-=val[i]*take[i];//remaining amount
         }
         if(amount>0)
             return {-1};
         for(int i=0;i<5;i++)
             cnt[i]-=take[i];
         return take;
    }
};

/**
 * Your ATM object will be instantiated and called as such:
 * ATM* obj = new ATM();
 * obj->deposit(banknotesCount);
 * vector<int> param_2 = obj->withdraw(amount);
 */